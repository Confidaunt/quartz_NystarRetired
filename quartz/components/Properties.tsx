import  style from "./styles/properties.scss"
import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { URL } from "url"
import { hostname } from "os"
import { range } from "d3"
import { JSXInternal } from "preact/src/jsx"

    export default (() => {
      function Properties({fileData}: QuartzComponentProps) {
          return (
            <div class="properties">
            fileData.frontmatter
            </div>
            )
        }
        
        Properties.css = style
        return Properties
      }
      
      ) satisfies QuartzComponentConstructor
      