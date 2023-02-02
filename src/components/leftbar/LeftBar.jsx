import "./LeftBar.scss";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/1.png?raw=true"
              alt="profile"
            />
            <span>john doe</span>
          </div>
          <div className="item">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/1.png?raw=true"
              alt="Friends"
            />
            <span>Friends</span>
          </div>
          <div className="item">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/2.png?raw=true"
              alt="Groups"
            />
            <span>Groups</span>
          </div>
          <div className="item">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/3.png?raw=true"
              alt="Marketplace"
            />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/4.png?raw=true"
              alt="Watch"
            />
            <span>Watch</span>
          </div>
          <div className="item">
            <img
              src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/6.png?raw=true"
              alt="Memories"
            />
            <span>Memories</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your shortcut's</span>
          <div className="item">
            <img src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/6.png?raw=true" alt="Events" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/7.png?raw=true" alt="Gaming" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/8.png?raw=true" alt="Gallery" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/9.png?raw=true" alt="Videos" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/10.png?raw=true" alt="Messages" />
            <span>Messages</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/13.png?raw=true" alt="Fundraiser" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/11.png?raw=true" alt="Tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src="https://github.com/safak/youtube2022/blob/react-social-ui/src/assets/12.png?raw=true"alt="Courses" />
            <span>Courses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
