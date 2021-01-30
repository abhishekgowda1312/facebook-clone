import React from 'react'
import './Feed.css'
import MessageSender from './MessageSender'
import StoryReel from './StoryReel'

function Feed() {
    return (
        <div className="feed">
            {/* Story reel */}
            <StoryReel />
            <MessageSender />
            {/* message sender */}
        </div>
    )
}

export default Feed
