// https://www.freecodecamp.org/news/javascript-debounce-example/
export default function  debounce(func, timeout = 500){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }

// https://stackoverflow.com/questions/822452/strip-html-from-text-javascript
  export function removeHTMLTags (str) {
    return str.replace(/<[^>]*>?/gm, '');
  };

