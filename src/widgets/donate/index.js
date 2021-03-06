const { createCustomElement } = require('../../lib/browser/customElement');

const { WIDGET_TAG_NAME } = require('./tagname');

const ensureDependencies = () =>
  Promise.all([
    import('react'),
    import('react-dom'),
    import('./WidgetContainer'),
  ]);

createCustomElement(
  WIDGET_TAG_NAME,
  () =>
    class extends HTMLElement {
      unmount;

      connectedCallback() {
        const modalTitle = this.getAttribute('modalTitle');

        ensureDependencies().then(([React, { render, unmountComponentAtNode }, { WidgetContainer }]) => {
          if (!this.isConnected) {
            return;
          }

          this.unmount = unmountComponentAtNode;

          const props = { modalTitle };

          render(<WidgetContainer {...props} />, this);
        });
      }

      disconnectedCallback() {
        if (this.unmount) {
          this.unmount(this);
          delete this.unmount;
        }
      }
    },
).catch((error) =>
  console.error(`Could not load custom element ${WIDGET_TAG_NAME}: ${error.message}`),
);