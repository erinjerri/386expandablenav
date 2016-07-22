'use strict';

var React = require('react');

var ExpandableNav = require('../../src/index');
var {ExpandableNavContainer, ExpandableNavbar, ExpandableNavHeader,
    ExpandableNavMenu, ExpandableNavMenuItem, ExpandableNavPage,
    ExpandableNavToggleButton} = ExpandableNav;

{
  /*jslint browser: true */
  window.React = React;
  var $ = window.$;
}

var App = React.createClass({
  componentDidMount() {
    $('[data-toggle="menuitem-tooltip"]').tooltip();
  },
  render() {
    var headerSmall = <span className="logo">&lt;H&gt;</span>;
    var headerFull = <span>386BSD</span>;

    var menuItemsSmall = [
      <span className="glyphicon glyphicon-home"></span>,
      <span className="glyphicon glyphicon-book"></span>,
      <span className="glyphicon glyphicon-folder-open"></span>,
      <span className="glyphicon glyphicon-shopping-cart"></span>,
      <span className="glyphicon glyphicon-envelope"></span>
    ];
    var menuItemsFull = [
      <span>HOME</span>,
      <span>ARTICLES</span>,
      <span>SOURCE</span>,
      <span>STORE</span>,
      <span>CONTACT</span>
    ];
    var headerStyle = {
      paddingLeft: 5
    };
    var fullStyle = {
      paddingLeft: 50
    };
    return (
      <ExpandableNavContainer expanded={true} >
        <ExpandableNavbar fullClass="full" smallClass="small">
          <ExpandableNavHeader small={headerSmall} full={headerFull} headerStyle={headerStyle} fullStyle={fullStyle}/>
          <ExpandableNavMenu>
            <ExpandableNavMenuItem small={menuItemsSmall[0]} full={menuItemsFull[0]} tooltip={"HOME"} jquery={window.$}/>
            <ExpandableNavMenuItem small={menuItemsSmall[1]} full={menuItemsFull[1]} tooltip={"ARTICLES"} jquery={window.$} />
            <ExpandableNavMenuItem small={menuItemsSmall[2]} full={menuItemsFull[2]} tooltip={"SOURCE"} jquery={window.$} />
            <ExpandableNavMenuItem small={menuItemsSmall[3]} full={menuItemsFull[3]} tooltip={"SHOP"} jquery={window.$} />
            <ExpandableNavMenuItem small={menuItemsSmall[4]} full={menuItemsFull[4]} tooltip={"CONTACT"} jquery={window.$}/>
          </ExpandableNavMenu>
        </ExpandableNavbar>
        <ExpandableNavToggleButton smallClass="s" className="shared"/>

        <ExpandableNavPage>
          <div className="row">
            <h2>386BSD </h2>
            <p>This is a series of articles on 386BSD by William and Lynne Jolitz.</p>
          </div>
          <div className="row">
              <h2>What Does the Kernel Expect of vm_fault()?</h2>
              <p>The vm_fault()routine handles both page missing faults and page protection faults, which, on different architectures may be different exceptions in and of themselves. 
                </p>
                <iframe width="420" height="315"
                src="https://www.youtube.com/watch?v=qzZJTx39jak&feature=youtu.be">
                </iframe>
          </div>
        <div className="row">
        <h2></h2>
        <p>This routine accepts as arguments the particular address space in which the fault has occured, the address of the fault, and the kind of fault as classified by the protection level of access. </p>
<p>This is a placeholder for a code gist. </p>
</div>
          <div className="row">
            <div className="col-md-3">
              <p>This is a column.</p>
            </div>

             <div className="col-md-3">
              <p>This is a column, too. </p>
            </div>

          <div className="row">
          <p>
            <a href="###">Previous chapter</a></p>
            <p>
            <a href="###">Next chapter</a></p>
            </div>

          </div>
        </ExpandableNavPage>

      </ExpandableNavContainer>
    );
  }
});

module.exports = App;
