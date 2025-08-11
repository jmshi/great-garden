import { QuartzFilterPlugin } from "../types"

export const RemoveDrafts: QuartzFilterPlugin<{}> = () => ({
  name: "RemoveDrafts",
  shouldPublish(_ctx, [_tree, vfile]) {
    const draftFlag = vfile.data?.frontmatter?.draft
    if (draftFlag === true) {
      return false
    } else {
      return true
    }
  },
})
