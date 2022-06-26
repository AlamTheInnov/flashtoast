# flashtoast

<p>FlashToast is simple flash messages plugin for vue3 using same style like toast</p>

## Demo & Example
#### [Live demo](http://test.keen-design.ru/vue-flash-message/)

## Install
```bash
  npm install --save flashtoast
```

## Configuration
```javascript
import { flashToast } from './plugins/flashtoast/dist/flashtoast';
const app = createApp(App);
app.use(flashToast)
    ...
    .mount('#app');
```

## Declare
In root vue file. 
```vue
<FlashToast :position="'top-right'" :direction="'rtl'" v-zIndex:3000 v-class:any-class />
```

CSS inside your app.scc or any.
```css
@import '../js/plugins/flashtoast/dist/flashtoast.css';
```

## Usage
Use inject to make available in your component.
```javascript
import { inject } from 'vue';
const toast = inject('toast');

toast.success({
    title: 'Success',
    message: 'Hello world!',
    delay: 5000
});

toast.info({
    title: 'Info',
    message: 'You can\'t perform this action',
    delay: 5000
});

toast.info({
    title: 'Warning',
    message: 'Oops, are you sure?',
    delay: 5000
});

toast.error({
    title: 'Error',
    message: 'Some error occurred, Please try again',
    delay: 5000
});
```
### Directive
| Name               | Type     | Default | Desciption                                                              |
| ---:               |:---:     |:---     |:---                                                                     |
| class              | String   |         | Can be use for changing the style.                                      | 
| zIndex             | String   | 3000    | You can give z-index of your choice according to your Application.      |

 :position="'top-right'" :direction="'rtl'"

### Props
|     Name       |   Type      |          Default          |              Desciption                                                                 |
|     ---:       |    :---:    |           :---:           |                :---                                                                     |
| position       |   String    | 'top-right'               | To change the position of like, top-right, bottom-right, bottom-left, top-left & center`|
| direction      |   String    | 'ltr'                     | Change direction according to the language of application, possible options ltr & rtl   |

```

## License
<p>Vue-Flash-Message is open-sourced software licensed under the <a href="http://opensource.org/licenses/MIT">MIT license</a>.</p>
