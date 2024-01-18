import  style from "./styles/properties.scss"
import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { URL } from "url"
import { hostname } from "os"
import { range } from "d3"
import { JSXInternal } from "preact/src/jsx"

function createPropertyElement(key: string, value: any) {
  if (value != "") {
    return(
      <li>
        {key} : {value}
      </li>
    )
  }
  else {
    return (
      <li>{key} : None</li>
    )
  }
}

export default (() => {
  function Properties({fileData}: QuartzComponentProps) {
    var propertiesElements = [] 

    if(Object.keys(fileData.frontmatter ?? {}).length > 0){
      for (const [key, value] of Object.entries(fileData.frontmatter ?? {})) {
        propertiesElements.push(createPropertyElement(key, value))
      }
    }

    return (      
      <div class="properties">
        <ul>{propertiesElements}</ul>
      </div>
    )
  }
        
    Properties.css = style
    return Properties

  }
      
) satisfies QuartzComponentConstructor
      

