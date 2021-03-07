import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined'
import React from 'react'
import { useStateValue } from '../StateProvider'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

function Sidebar() {
    const [{ user },] = useStateValue()
    return (
        <div className="sidebar">

            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png" title="COVID-19 Information Center" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png" title="Friends" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png" title="Groups" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/ys/r/9BDqQflVfXI.png" title="Marketplace" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png" title="Watch" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png" title="Events" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png" title="Memories" />
            <SidebarRow src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png" title="Saved" />
            <SidebarRow Icon={ExpandMoreOutlined} title="See More" />
            <div className="sidebar__empty"></div>
        </div>
    )
}

export default Sidebar
