import { visit } from "unist-util-visit";
import { toString } from "mdast-util-to-string";

const SUPPORTED_TYPES = ["info", "warning", "success", "error"];

function isContainerDirective(node) {
    return node && node.type === "containerDirective";
}

function convertChildrenToHtml(children) {
    return children
        .map((child) => {
            if (child.type === "text") {
                return child.value;
            } else if (child.type === "paragraph" && child.children) {
                return `<p>${convertChildrenToHtml(child.children)}</p>`;
            } else if (child.type === "strong") {
                return `<strong>${convertChildrenToHtml(child.children)}</strong>`;
            }
            return ""; // Default fallback
        })
        .join("");
}

function getCalloutHtml(type, content) {
    switch (type) {
        case "success":
            return `
<div class="rounded-md bg-green-50 p-4 not-prose my-2">
    <div class="flex">
        <div class="shrink-0">
            <svg class="size-5 text-green-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="ml-3">
            <h3 class="text-sm font-medium green">Success</h3>
            <div class="mt-2 text-sm text-green-800">
                <p">${content}</p>
            </div>
        </div>
    </div>
</div>`;
        case "error":
            return `
<div class="rounded-md bg-red-50 p-4 not-prose my-2">
    <div class="flex">
        <div class="shrink-0">
            <svg class="size-5 text-red-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="ml-3">
            <h3 class="text-sm font-medium text-red-800">Error</h3>
            <div class="mt-2 text-sm text-red-700">
                <p>${content}</p>
            </div>
        </div>
    </div>
</div>`;
        case "warning":
            return `
<div class="rounded-md bg-yellow-50 p-4 not-prose my-2">
    <div class="flex">
        <div class="shrink-0">
            <svg class="size-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495ZM10 5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-3.5A.75.75 0 0 1 10 5Zm0 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" clip-rule="evenodd" />
            </svg>
        </div>
        <div class="ml-3">
            <h3 class="text-sm font-medium text-yellow-800">Warning</h3>
            <div class="mt-2 text-sm text-yellow-700">
                <p>${content}</p>
            </div>
        </div>
    </div>
</div>`;
        default: // "info" or undefined
            return `
<div class="rounded-md bg-blue-50 p-4 not-prose my-2">
  <div class="flex">
    <div class="shrink-0">
      <svg class="size-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
        <path fill-rule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-7-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM9 9a.75.75 0 0 0 0 1.5h.253a.25.25 0 0 1 .244.304l-.459 2.066A1.75 1.75 0 0 0 10.747 15H11a.75.75 0 0 0 0-1.5h-.253a.25.25 0 0 1-.244-.304l.459-2.066A1.75 1.75 0 0 0 9.253 9H9Z" clip-rule="evenodd" />
      </svg>
    </div>
        <div class="ml-3">
            <h3 class="text-sm font-medium text-blue-800">Info</h3>
            <div class="mt-2 text-sm text-blue-700">
                <p>${content}</p>
            </div>
        </div>
  </div>
</div>`;
    }
}

export default function remarkCallout() {
    console.log("remarkCallout plugin loaded!");

    return (tree) => {
        visit(tree, (node, index, parent) => {
            if (!parent || index === undefined || !isContainerDirective(node)) {
                return;
            }

            if (node.name === "callout") {
                let calloutType = undefined;

                // Extract callout type from `directiveLabel`
                const labelNode = node.children.find(
                    (child) => child.type === "paragraph" && child.data?.directiveLabel
                );
                if (labelNode) {
                    // Extract value from the inner `text` node of the paragraph
                    const labelText = labelNode.children.find((child) => child.type === "text");
                    if (labelText && labelText.value) {
                        calloutType = labelText.value.trim();
                    }

                    // Remove the label node from children after we extract it
                    node.children = node.children.filter((child) => child !== labelNode);
                }

                const content = convertChildrenToHtml(node.children);

                if (SUPPORTED_TYPES.includes(calloutType)) {
                    // Replace with an HTML node
                    parent.children[index] = {
                        type: "html",
                        value: getCalloutHtml(calloutType, content),
                    };
                } else {
                    console.warn(`Unsupported callout type: ${calloutType}`);
                }
            } else {
                console.warn(`Unhandled directive: :::${node.name}`);
                parent.children[index] = {
                    type: "text",
                    value: toString(node),
                };
            }
        });
    };
}