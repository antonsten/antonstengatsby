import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        <footer>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                var stripe = Stripe('pk_live_ySOjGzWMlJJ1IcFO0PVVQgGf');

                console.log(stripe)

                setTimeout(function() {
                  var checkoutButton = document.getElementById('checkout-button-sku_F49OkPghAVw5kM');
                
                  checkoutButton.addEventListener('click', function () {
                    stripe.redirectToCheckout({
                      items: [{sku: 'sku_F49OkPghAVw5kM', quantity: 1}],
                      successUrl: 'https://antonsten.com/success',
                      cancelUrl: 'https://antonsten.com/canceled',
                    })
                    .then(function (result) {
                      if (result.error) {
                        var displayError = document.getElementById('error-message');
                        displayError.textContent = result.error.message;
                      }
                    });
                  });
                }, 2000)
              `,
            }}
          />
        </footer>
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
