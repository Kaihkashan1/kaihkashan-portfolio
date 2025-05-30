---
title: Documentation frameworks
description:  While documenting new products or updating existing ones, I've used Diátaxis, DITA, and Docs as Code to structure and write documentation.
date: 2025-03-09
position: 1
---

While documenting new products or updating existing ones, I've adopted the following documentation frameworks:
- Diátaxis
- Docs as Code
- DITA

## Diátaxis 

Diátaxis organizes documentation into four categories: tutorials, how-to guides, technical references, and explanations. The framework helps decide what to write, how to write, and how to organize documentation.

Adhering to the Diátaxis framework strictly is not required - you can adapt it based on the product's needs. Sometimes, writing a tutorial is not possible, so just skip it! Or, if a reference isn't required, you don't have to write one.

#### My work at Adjust

I worked with my colleague to rewrite articles in the Developer Hub using the Diátaxis framework. We were able to structure the information in a way that worked well for our clients.  

:::callout[success]
Clients mentioned that they were able to get set up quickly because the tutorial provided a complete example, rather than multiple examples within the same article. 
<br/>

The Support and Implementation teams analyzed queries that came in for these topics, and came to a conclusion that support queries went down by 50% for articles that had this new format. 
:::

![From old content layout to layout using the Diátaxis framework](./diataxis.jpeg)

References: From <a href="https://dev.adjust.com/en/sdk/android/features/events" target="_blank">old content layout</a> | <a href="https://archive.ph/hLb28" target="_blank">Archived link</a> to <a href="https://dev.adjust.com/en/sdk/adobe-extension/android/events" target="_blank">new content layout</a> | <a href="https://archive.ph/9Kou2" target="_blank">Archived link</a>

## Docs as Code

Docs as Code is a framework that treats documentation like code. Writers typically use the same tools and processes that developers use for writing code. This approach involves creating documentation in Markdown text files and storing them in source code repositories such as Git. It promotes collaboration among developers, writers, and other stakeholders, ensuring that documentation is updated and accurate.

Docs as Code supports version control, automated testing, and continuous integration, ensuring that documentation remains synchronized with code updates and always stays up-to-date. This approach allows product managers or writers to block new feature merges if they don't include documentation, encouraging developers to integrate documentation as part of the product.

The Docs as Code framework is used for Developer documentation, which usually includes SDK and API documentation.
 
#### My work at Adjust

I collaborated closely with my team to move the Developer content in the Help Center to its own separate Developer Hub. We brainstormed and finalized the design and structure of the new Developer Hub.

:::callout[success]
Transitioning to the Developer Hub marked a significant change in how we approached developer documentation. This shift not only streamlined processes for the SDK teams but also improved their experience by allowing them to remain within GitHub, which they found highly beneficial. 
<br/>

Additionally, other teams were able to open pull requests to propose changes, which accelerated the process of updating content.
:::

![From Developer content in the Help Center to Developer Hub](./docs-as-code.jpeg)

References: <a href="https://dev.adjust.com/en" target="_blank">Developer Hub</a> | <a href="https://github.com/adjust/dev-docs/commits?author=KaihkashanAdjust" target="_blank">My GitHub commits</a>

## DITA

Technical writers use DITA (Darwin Information Typing Architecture), an XML-based architecture to create and manage topic-oriented content. 
DITA maps and topics are XML files, where images, videos, or any other files are inserted as references. DITA is widely used in technical documentation due to its ability to create reusable content. This ensures consistency, minimizes duplication, and improves maintainability.

#### My work at PTC

During my time at PTC, I've used DITA extensively to document multiple flagship products, such as ThingWorx Flow, ThingWorx Analytics Manager, and
ThingWorx Utilities. I've had the opportunity to design the information architecture of ThingWorx Flow and ThingWorx Analytics Manager from scratch.

:::callout[success]
I worked on over 500 topics independently, including concepts, tasks, and references, for ThingWorx Flow, all of which were included in a single market release. My efforts were widely recognized and appreciated by stakeholders. As a result, clients were able to set up and use this complex product independently, without needing to contact support.
:::

References:

- <a href="https://support.ptc.com/help/thingworx_hc/thingworx_analytics_8/index.html#page/analytics/AnalysisServices_FlexibleScaling.html" target="_blank">Concept topic</a> | <a href="https://archive.today/OcWnW" target="_blank">Archived link</a>
- <a href="https://support.ptc.com/help/thingworx_hc/thingworx_8_hc/en/index.html#page/ThingWorx/Help/Integration_Orchestration/CustomAction85.html" target="_blank">Task topic</a> | <a href="https://archive.today/mCLKP" target="_blank">Archived link</a>
- <a href="https://support.ptc.com/help/thingworx_hc/thingworx_8_hc/en/index.html#page/ThingWorx/Help/Integration_Orchestration/InstallingTwxFlowPrerequisitesMSSQL.html" target="_blank">Reference topic</a> | <a href="https://archive.today/wrVI3" target="_blank">Archived link</a>