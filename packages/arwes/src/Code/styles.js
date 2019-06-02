import { rgba } from 'polished';

export default theme => {
  return {
    root: {
      display: 'inline-block',
      verticalAlign: 'middle',
      fontFamily: theme.code.fontFamily,
      fontSize: theme.code.fontSize,
      lineHeight: '1.375',
      direction: 'ltr',
      textAlign: 'left',
      whiteSpace: 'pre',
      wordSpacing: 'normal',
      wordBreak: 'normal',
      mozTabSize: '2',
      oTabSize: '2',
      tabSize: '2',
      webkitHyphens: 'none',
      mozHyphens: 'none',
      msHyphens: 'none',
      hyphens: 'none',

      background: rgba(theme.code.background, theme.alpha),
      color: theme.code.color,
      transition: `all ${theme.animTime}ms ease-out`,
      opacity: 1,

      '&$exiting, &$exited': {
        opacity: 0
      },

      'pre&': {
        display: 'block',
        margin: [0, 0, theme.margin],
        padding: theme.padding / 2,
        verticalAlign: 'top',
        overflow: 'auto'
      },
      // eslint-disable-next-line standard/computed-property-even-spacing
      [`& .token.comment,
        & .token.prolog,
        & .token.doctype,
        & .token.cdata,
        & .token.punctuation`
      ]: {
        color: theme.code.comment
      },
      '& .token.punctuation': {
        opacity: 1
      },
      // eslint-disable-next-line standard/computed-property-even-spacing
      [`& .token.tag,
        & .token.operator`]: {
        color: theme.code.operator
      },
      // eslint-disable-next-line standard/computed-property-even-spacing
      [`& .token.property,
        & .token.function`]: {
        color: theme.code.function
      },
      // eslint-disable-next-line standard/computed-property-even-spacing
      [`& .token.tag-id,
        & .token.selector,
        & .token.atrule-id`]: {
        color: theme.code.selector
      },
      // eslint-disable-next-line standard/computed-property-even-spacing
      [`&.language-css,
        &.language-scss,
        & .token.boolean,
        & .token.string,
        & .token.number,
        & .token.entity,
        & .token.url,
        & .language-css .token.string,
        & .language-scss .token.string,
        & .style .token.string,
        & .token.attr-value,
        & .token.keyword,
        & .token.control,
        & .token.directive,
        & .token.unit,
        & .token.statement,
        & .token.regex,
        & .token.atrule`]: {
        color: theme.code.value
      },
      // eslint-disable-next-line standard/computed-property-even-spacing
      [`& .token.atrule,
        & .token.attr-value,
        & .token.keyword`]: {
        color: theme.code.keyword
      },
      // eslint-disable-next-line standard/computed-property-even-spacing
      [`& .token.placeholder,
        & .token.attr-name,
        & .token.variable`]: {
        color: theme.code.variable
      },
      '& .token.deleted': {
        textDecoration: 'line-through'
      },
      '& .token.italic': {
        fontStyle: 'italic'
      },
      // eslint-disable-next-line standard/computed-property-even-spacing
      [`& .token.important,
        & .token.bold`]: {
        fontWeight: 'bold'
      },
      // eslint-disable-next-line standard/computed-property-even-spacing
      [`& .token.regex,
        & .token.important`]: {
        color: theme.code.operator
      },
      '& .token.entity': {
        cursor: 'help'
      }
    },

    entering: {},
    entered: {},
    exiting: {},
    exited: {}
  };
};
