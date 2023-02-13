import {posts, suggestUsers} from "./database.js"
import { registerEvent } from "./newPost.js"
import { render } from "./render.js"
import { renderSuggest } from "./suggest.js"

render(posts)
registerEvent(posts)
renderSuggest(suggestUsers)