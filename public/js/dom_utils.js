HTMLElement.prototype.createAppendElement = function (nodeType, properties) {
  const node = document.createElement(nodeType);
  for (let property in properties) {
    node[property] = properties[property];
  }
  this.appendChild(node);
  return node;
};

const tasks = document.querySelector('#tasks');
tasks.addEventListener('click',()=>{
  window.location.href = "/category.html"
})

const dashboard = document.querySelector('#dashboard');
dashboard.addEventListener('click',()=>{
  window.location.href = "/"
})
