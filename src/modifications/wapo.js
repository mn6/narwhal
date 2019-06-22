// Create style tag with modifications
var z = document.createElement('style')

z.innerHTML = `
  #wp_Signin, .content_gate {
    display: none !important;
  }
`

document.head.appendChild(z)