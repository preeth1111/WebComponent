import React from "React";
import "../../css/bootstrap.css";
import "../../css/navbar/bootstrapNavbarAll.css";
export default class NavbarBootAll extends React.Component{

constructor(props){
  super(props);
  this.activateSearch=this.activateSearch.bind(this)
  this.state={
    searchText:'inactive'
  }
}

activateSearch(e){
  if(e.target.value!=''){
      this.setState({searchText:'active'})
  }else{
      this.setState({searchText:'inactive'})

  }

}
  render(){
    return (
      <nav class="navbar  navbar-expand-lg navbar-dark bg-dark flexible-nav icon-stack sidenav">
    <a class="navbar-brand" href="#">
    <img src="../../images/logo.png" height="35px" width="35px" />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 navbar-navigation-menu">
        <li class="nav-item active">
          <a class="nav-link" href="#"><i class="material-icons">dashboard</i> <span>Overview</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="material-icons">directions_subway</i> <span>My Fleet</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#"><i class="material-icons">insert_chart</i> <span>Reports</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="material-icons">center_focus_strong</i> <span>Tracking</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#"><i class="material-icons">donut_large</i> <span>Operations</span>
          <span class="badge badge-pill badge-primary">34</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><i class="material-icons">verified_user</i> <span>Admin</span></a>
            <div class="treeview-menu-block">
        <ul class="treeview-menu">
     <li><a href="pages/layout/top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>
     <li><a href="pages/layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>
     <li><a href="pages/layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>
     <li><a href="pages/layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
   </ul>
   </div>
        </li>

      </ul>

      <ul class="navbar-nav ml-auto action-items">
      <li class="nav-item">
      <div class="navbar-search">
      <button type="submit" class="btn btn-search">
      <i class="material-icons">
    search
    </i>
      </button>
  <input type="text" name="search" placeholder="search" />


</div>
      </li>
      <li class="nav-item">
      <a class="nav-link icon-border" href="#"><i class="material-icons">notification_important</i>
      <span class="badge badge-pill badge-danger">4</span>
      </a>
      </li>
      <li class="nav-item">
      <a class="nav-link user-avatar d-inline-flex align-items-center" href="#">
      <span class="avatar w-32"><i class="material-icons">account_circle</i></span>
      <span class="nav-text d-flex flex-column pointer pl-2 text-left" style={{lineHeight:"1"}}><span class="text-uppercase">salestest</span><small class="text-uppercase">CUSTADMIN</small></span>

      </a>
      <div class="treeview-menu-block">
  <ul class="treeview-menu">
<li><a href="pages/layout/top-nav.html"><i class="fa fa-circle-o"></i> Top Navigation</a></li>
<li><a href="pages/layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>
<li><a href="pages/layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>
<li><a href="pages/layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>
</ul>
</div>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="#">
    <i class="material-icons">drag_indicator</i>
      </a>
      </li>
      </ul>

    </div>
  </nav>
)
  }
}
