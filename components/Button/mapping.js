import linkResolver from "../../lib/routes";
// import mediaMapping, { getMediaType } from '../Media/mapping';

// const getMappedDrawer = (buttonChild) => {
//   const openInDrawer = buttonChild?.openInDrawer;
//   if (!openInDrawer) return null;
//   // if (!buttonChild?.media || buttonChild?.media?.length === 0)
//   //   return {
//   //     title: 'Missing media',
//   //   };

//   const media = mediaMapping(buttonChild?.media?.[0]);

//   return {
//     title: buttonChild?.title,
//     subtitle: buttonChild?.subtitle,
//     content: buttonChild?.content,
//     media,
//   };
// };

const getButtonType = (button) => {
  // Use manually set button type if available

  if (button?.buttonType) return button?.buttonType;
  // const openInDrawer = button?.openInDrawer;

  // if (openInDrawer) {
  //   const mediaType = getMediaType(button?.media?.[0]);
  //   return 'content-drawer';
  //   // switch (mediaType) {
  //   //   case 'embed-youtube':
  //   //     return 'youtube-lightbox';
  //   //   case 'image':
  //   //   default:
  //   //     return 'image-lightbox';
  //   // }
  // } else {
  // Use DatoCMS _modelApiKey
  const model = button?._modelApiKey;

  switch (model) {
    case "internal_navigation_button":
    case "internal_button":
      return "internal";
    case "action_button":
      return "no-action";
    case "external_navigation_button":
    case "external_button":
    default:
      return "external";
  }
  // }
};

const getButton = (button) => {
  if (!button) return "";

  let buttonType = getButtonType(button);

  let link = "/";
  if (buttonType === "internal") {
    link = button?.link ? linkResolver(button?.link) : "/";
  }

  if (button?.anchorId) {
    link = `${link}#${button?.anchorId}`;
  }

  /**
   * Recursively get nested buttons
   * - Ex: dropdown menu
   */
  let nestedButtons = null;
  if (button?.buttons) {
    // eslint-disable-next-line no-use-before-define
    nestedButtons = getButtons(button?.buttons);
    buttonType = "category";
  }

  // Get nested media
  // const media = !button.openInDrawer && mediaMapping(button?.media?.[0]);
  const buttonUrl = buttonType === "internal" ? link : button?.link;

  return {
    buttonId: button?.id,
    buttonText: button?.label,
    buttonType: buttonType,
    buttonRole: button?.role,
    buttonStyle: button?.style || null,
    buttonUrl,
    buttonTarget: button?.openInNewTab ? "_blank" : "_self",
    // buttonMedia: media || null,
    aria: {
      label: button?.aria?.label || button?.label || media?.alt || buttonUrl,
      selected: button?.aria?.selected,
      controls: button?.aria?.controls,
    },
    // drawer: getMappedDrawer(button),
    buttons: nestedButtons,
    tracking: button?.analytics?.[0] && {
      action: "click",
      ...button.analytics[0],
    },
  };
};

const getButtons = (data) => {
  if (!data) return "";
  const buttons = data?.map((button) => getButton(button));
  return buttons;
};

export default getButtons;
