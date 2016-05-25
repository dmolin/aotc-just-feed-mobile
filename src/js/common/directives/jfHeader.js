angular.module('jf.common')
.directive('jfHeader', [() => (
{
  restrict: 'E',
  template: `
    <div class="jf-header">
      <div class="jf-header-logo-wrapper">
        <a href="/"><img class="logo-image" src="/img/just-feed.png"/></a> 
      </div>
    </div>
  `,
  scope:{},
  controller: _controller,
  link: _link
}
)])

function _controller() {

}

function _link(scope) {

}