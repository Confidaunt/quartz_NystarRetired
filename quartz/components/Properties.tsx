import  style from "./styles/properties.scss"
import { FullSlug, _stripSlashes, joinSegments, pathToRoot } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { URL } from "url"
import { hostname } from "os"
import { range } from "d3"
import { JSXInternal } from "preact/src/jsx"

function createPropertyElement(key: string, value: any) {
  key = key.trim()
  value = value.trim()
  // if the link is present and not empty
  if (value != "") {
    return(
      <p>
        {key} : {value}
      </p>
    )
  }
  else {
    return (
      <p>{key} : None</p>
    )
  }
}    

export default (() => {
  function Properties({fileData}: QuartzComponentProps) {
    var propertiesElements = [] 

    for (const [key, value] of Object.values(fileData.frontmatter ?? {})) {
      propertiesElements.push(createPropertyElement(key, value))
    }

    return (      
      <div class="properties">
        {propertiesElements}
      </div>
    )
  }
        
    Properties.css = style
    return Properties

  }
      
) satisfies QuartzComponentConstructor
      

