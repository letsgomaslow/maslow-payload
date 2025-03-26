import type { Block } from 'payload';

export const CapabilitiesHeroBlock: Block = {
  slug: 'capabilitiesHero',
  interfaceName: 'CapabilitiesHeroBlock',
  fields: [
    {
      name: 'subtitle',
      type: 'text',
      required: true,
      defaultValue: 'lorem ipsum dolor sit adipiscing consecutor'
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    }
  ],
  labels: {
    singular: 'Capabilities Hero Block',
    plural: 'Capabilities Hero Blocks',
  },
};