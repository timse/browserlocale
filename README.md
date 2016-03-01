
# Browserlocale

retrieves locale from current `navigator` object

# how do i use it?

As `browserlocale` is UMD you can either require it or load it directly into your browser

## require/import

```javascript
import browserlocale from 'browserlocale';

browserlocale();
// => "en-us" or whatever locale there currently is
```

## global in browser

```javascript
<script src="some/path/to/browserlocale.js"></script>
<script>
browserlocale();
// => "en-us" or whatever locale there currently is
</script>
```

