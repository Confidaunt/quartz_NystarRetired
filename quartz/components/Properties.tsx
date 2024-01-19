import { FullSlug, _stripSlashes, joinSegments, pathToRoot, slugifyFilePath, TransformOptions, transformInternalLink, transformLink, resolveRelative, simplifySlug, FilePath } from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import  style from "./styles/properties.scss"
import { URL } from "url"
import { hostname } from "os"
import { range } from "d3"
import { JSXInternal } from "preact/src/jsx"

function createLinkedElement(fileData: any, opts : any, value: string) {
 
  let cleanedValue = value.replace(/['"\[\]]+/g, '')
  let href = transformLink(fileData.slug!, cleanedValue, opts)

  return (
    <a  href={href} class="internal">{cleanedValue}</a>
  )
}

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
  function PropertiesWithWorkingLinks({fileData, allFiles}: QuartzComponentProps, ) {
    const opts: TransformOptions = {
      strategy: "shortest",
      allSlugs: allFiles.map((fp) => fp.slug as FullSlug)
    }

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


/*
    var linkedElements = [] 
    const valueArray = fileData.frontmatter?.Allies

    for (const [index, arrayItem] of Object.entries(valueArray ?? {})) {
      var entry = valueArray[index]
      if(entry.includes("[[")){
        if(Number(index) > 0){
          linkedElements.push(", ")
        }
        linkedElements.push(createLinkedElement(fileData, opts, entry))
      }
      else{
        linkedElements.push(entry)
      }
    }

    return (      
      <div class="properties">
        <p>{linkedElements}</p>
      </div>
    ) 
    */
    //var valueArray = value?.split(",")
    //console.log(valueArray)
    //linkedElements.push(createPropertyElement(fileData, valueArray, opts))


    //return (      
    //  <div class="properties">
    //    <ul>{linkedElements}</ul>
    //  </div>
    // )

   // let entry = ""
   // let href = ""
    //console.log(value.length)
    //if (value){
    //  for (var i of range(value.length)) {
    //    console.log(value[i])
    //    entry = value[i]
    //    entry = entry.replace(/['"\[\]]+/g, '')
    //    href = transformLink(fileData.slug!, value, opts)

    //  }
    //}

   // console.log(value)
    //value = value.replace(/['"\[\]]+/g, '')
    //let href = transformLink(fileData.slug!, value, opts)
    //return (
    //  <p><a  href={href} class="internal">{value}</a></p>
    //)
        //<ul>{linkedElements}</ul>



  }
        
    PropertiesWithWorkingLinks.css = style
    return PropertiesWithWorkingLinks

  }
  ) satisfies QuartzComponentConstructor