HTMLElement.prototype.createAppendElement = function (nodeType, properties) {
  const node = document.createElement(nodeType);
  for (let property in properties) {
    node[property] = properties[property];
  }
  this.appendChild(node);
  return node;
};


