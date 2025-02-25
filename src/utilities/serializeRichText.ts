// src/utilities/serializeRichText.ts
export function serializeRichText(richText: any): string {
  if (!richText || !richText.root?.children) {
    console.warn('serializeRichText: Invalid richText', richText);
    return '';
  }
  
  // Debug: log the richText object
  console.log('Serializing richText:', richText);
  
  // A simple serializer: join text from each child
  const html = richText.root.children
    .map((child: any) => {
      if (child.children && Array.isArray(child.children)) {
        return child.children.map((node: any) => node.text || '').join(' ');
      }
      return '';
    })
    .join('<br/>');
  
  // Debug: log the generated HTML
  console.log('Serialized HTML:', html);
  return html;
}
