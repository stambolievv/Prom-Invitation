import { render } from 'lit-html';

const root = document.getElementById('main');

/**
 * @description Decorates the provided context by adds some useful functions that can be used later.
 * @param {object} ctx - The context object that is passed to the middleware to decorate.
 * @param {Function} next - The next function in the middleware chain.
 */
export function decorateContext(ctx, next) {
  Object.assign(ctx, {
    render: (content) => render(content, root),
  });

  next();
}