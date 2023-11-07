import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  Avatar,
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import ProfilePopover from "../../../ProfilePopover/ProfilePopover";

const FriendItem = () => {
  const [openPopover, setOpenPopover] = React.useState(false);

  const triggers = {
    onMouseEnter: () => setOpenPopover(true),
    onMouseLeave: () => setOpenPopover(false),
  };

  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);
  return (
    <div>
      <Popover
        placement="left-start"
        open={openPopover}
        handler={setOpenPopover}
      >
        <PopoverHandler {...triggers}>
          <Card
            color="transparent"
            shadow={false}
            className="w-full max-w-[26rem] pb-0"
          >
            <CardHeader
              color="transparent"
              floated={false}
              shadow={false}
              className="mx-0 flex items-center gap-4 pt-0 pb-0"
            >
              <Avatar
                size="sm"
                variant="circular"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h6" className="text-secondary">
                    Tania Andrew
                  </Typography>
                </div>
              </div>
            </CardHeader>
          </Card>
        </PopoverHandler>
        <PopoverContent {...triggers} className="z-50 max-w-[24rem] bg-card">
          <ProfilePopover />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FriendItem;
