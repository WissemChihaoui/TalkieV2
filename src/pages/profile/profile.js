import React from "react";
import NavBar from "../../comp/NavBar/NavBar/NavBar";
import ProfilePic from "../../media/eminem.jpg";
import BookMark from "../../icons/Outline/bookmark-alt.svg";
import cog from "../../icons/Outline/cog.svg";
import usergroup from "../../icons/Outline/user-group.svg";
import newspaper from "../../icons/Outline/newspaper.svg";
import Feed from "./views/Feed";
import Friends from "./views/Friends";
import Collection from "./views/Collection";
import Edit from "./views/Edit";
import { BrowserRouter as  Route, Switch, NavLink } from "react-router-dom";
import { Button } from "@material-tailwind/react";
const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-bg w-screen h-screen py-4 px-16 sticky">
        <div className="w-full h-full ">
          <section className="relative w-full mt-24  flex items-center flex-col mb-4">
            <figure className="rounded-[36px] w-full h-80 overflow-hidden">
              {/* <Spline scene="https://prod.spline.design/vfZqMIGyanMoj-OB/scene.splinecode" className='rounded-[36px]'/> */}
            </figure>
            <div className="bg-card w-[80%] h-24 absolute top-60 rounded-sm flex justify-between items-end">
              <div className="flex items-center p-2 gap-4">
                <img
                  src={ProfilePic}
                  className="w-[88px] h-full object-cover rounded-sm"
                />
                <div className="flex flex-col  h-full">
                  <p className="text-3xl font-bold text-primary">
                    Mouhamed Ali Abdallah
                  </p>

                  <p className="text-[16px] text-secondary">Tunisia, 22yo</p>
                </div>
              </div>
              <div className="flex justify-between text-primary h-max gap-2 mr-2">
  <NavLink to="/profile" className="" activeClassName="active-link">
    <Button
      color={window.location.pathname === '/profile' ? 'blue' : ''}
      className="text-primary py-2 px-4 border border-gray-600 rounded flex items-center gap-3"
    >
      <img src={newspaper} alt="Feed" /> Feed
    </Button>
  </NavLink>
  <NavLink to="/profile/friends" className="text-primary  flex items-center gap-3" activeClassName="active-link">
    <Button
      color={window.location.pathname === '/profile/friends' ? 'blue' : ''}
      className="text-primary py-2 px-4 border border-gray-600 rounded flex items-center gap-3"
    >
      <img src={usergroup} alt="Friends" /> Friends
    </Button>
  </NavLink>
  <NavLink to="/profile/collection" className="text-primary  flex items-center gap-3" activeClassName="active-link">
    <Button
      color={window.location.pathname === '/profile/collection' ? 'blue' : ''}
      className="text-primary py-2 px-4 border border-gray-600 rounded flex items-center gap-3"
    >
      <img src={BookMark} alt="Collection" /> Collection
    </Button>
  </NavLink>
  <NavLink to="/profile/edit" className="text-primary  flex items-center gap-3" activeClassName="active-link">
    <Button
      color={window.location.pathname === '/profile/edit' ? 'blue' : ''}
      className="text-primary py-2 px-4 border border-gray-600 rounded flex items-center gap-3"
    >
      <img src={cog} alt="Edit" /> Edit
    </Button>
  </NavLink>
</div>
            </div>
          </section>
          <main className="mt-12 flex items-center flex-col pb-4">
            <div className="w-4/5 rounded">
              <Switch>
                <Route path="/profile/friends">
                  <Friends />
                </Route>
                <Route path="/profile/edit">
                  <Edit />
                </Route>
                <Route path="/profile/collection">
                  <Collection />
                </Route>
                <Route path="/profile">
                  <Feed />
                </Route>
              </Switch>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
