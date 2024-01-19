import { FullSlug, _stripSlashes, TransformOptions, transformLink} from "../util/path"
import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import  style from "./styles/properties.scss"

function createLinkedElement(fileData: any, opts : any, value: string) {
  let cleanedValue = value.replace(/['"\[\]]+/g, '')
  let href = transformLink(fileData.slug!, cleanedValue, opts)

  return (
    <a  href={href} class="internal">{cleanedValue}</a>
  )
}

function createPropertyElement(key: string, value: any) {
  return(
    <li>
      {key} : {value}
    </li>
  )
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

        var linkedElements = [] 
        for (const [index, arrayItem] of Object.entries(value ?? {})) {
          var entry = value[index]
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
        propertiesElements.push(createPropertyElement(key, linkedElements))
      }
    }

    return (      
      <div class="properties">
        <ul>{propertiesElements}</ul>
      </div>
    )

  }

    PropertiesWithWorkingLinks.css = style
    return PropertiesWithWorkingLinks

  }
) satisfies QuartzComponentConstructor

/* Credit to both https://github.com/gamberoillecito for their author and nextnote from which I built this and to https://github.com/jackyzha0 both the creator and gracious question answerer*/