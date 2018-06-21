import React, { Component } from 'react'

class Blocks extends Component{
    
    /**
     * Temporarily uses builder components instead of block.
     * we can put our dynamic import in this function.
     * 
     */
    renderBlocks(){
        const { blocks } = this.props;
        console.log('Blocks', blocks)
        return blocks.map(block => {
            return(
                <li>
                    <h2>{block.type}</h2>
                </li>
            )
        })
    }

    render(){
        return(
            <div>
                <h1>Showing all the builers that this page uses:</h1>
                <ul>
                    {this.renderBlocks()}
                </ul>
            </div>
        )
    }
}

export default Blocks