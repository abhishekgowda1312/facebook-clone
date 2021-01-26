import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
    return (
        <div className="sidebar">

            <SidebarRow src="https://scontent.fblr18-1.fna.fbcdn.net/v/t1.0-1/cp0/p86x86/13645123_1408458539180900_7546334927620120082_n.jpg?_nc_cat=109&ccb=2&_nc_sid=dbb9e7&_nc_ohc=xUxZOOSyM8oAX8E7zT9&_nc_ht=scontent.fblr18-1.fna&tp=27&oh=d63f106451440cbc3e1c01e99bab277a&oe=60349715" title="Abhishek Gowda" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png" title="COVID-19 Information Center" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" title="Marketplace" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Watch" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png" title="Events" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png" title="Memories" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" title="Saved" />
            <SidebarRow Icon={ExpandMoreOutlined} title="See More" />
        </div>
    )
}

export default Sidebar
