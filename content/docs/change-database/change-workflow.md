---
title: Change Workflow
---

For a typical change workflow, a developer first submits the SQL statement for DBA to review. After review is approved, the SQL statement will then be applied to the corresponding database. For a single change, this step would normally be repeated for each environment (e.g. integration, staging, prod).

To facilitate this heavily used process, Bytebase has designed a comprehensive dashboard to unify the stage progression and the collaboration experience into a single page.

![Issue detail interface](/content/docs/issue-view-annotated.png)

1. Status banner highlighting the issue status.

2. Issue abstract. If the issue is created by a code commit from a linked repository, that code commit information will be displayed.

3. Action buttons to change the issue status.

4. Flow bar showing the stage progression.

5. Task execution status for the selected stage. By default, the current active stage is selected. User can click the flow bar (Item 4) or use the stage dropdown on the right side bar (Item 10) to switch the stage.

6. SQL statement for the selected stage. The statement could also change by selecting different stages.

7. Issue description.

8. Issue activity and comment area.

9. Issue status and assignee.

10. Stage info. User can use the stage dropdown to check info from other stages.

11. Issue misc info.

12. Subscription list.

## Issue Need Attention

On the issue page, the issue creator can click the bell button to mark the issue as requiring attention from the assignee.

![the position of the bell button on the issue page](/content/docs/change-database/change-workflow/position.webp)

- The marked issue will be highlighted in the assignee's view.

![the highlighted attention-needed issues](/content/docs/change-database/change-workflow/highlighted.webp)

- If [external approval](/docs/administration/external-approval#ui-workflow) is enabled, it will also send out the external approval request.
