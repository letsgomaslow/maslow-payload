// src/utilities/serializeRichText.ts
export function serializeRichText(richText: any): string {
  // This is a simple example. In a real-world scenario,
  // you might use a library or more robust logic to handle various node types.
  if (!richText || !richText.root?.children) return '';

  return richText.root.children
    .map((child: any) => {
      if (child.children && Array.isArray(child.children)) {
        // Join all text nodes from child elements
        return child.children.map((node: any) => node.text || '').join('');
      }
      return '';
    })
    .join('<br/>');
}
