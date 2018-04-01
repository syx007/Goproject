import React from 'react'
import { Tabs, Button } from 'antd';
import { GEO_OPTIONS } from "../constants"


const TabPane = Tabs.TabPane;

export class Home extends React.Component {
    getGeoLocation = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                this.onSuccessGetGeoLocation,
                this.onFailedGetGeoLocation,
                GEO_OPTIONS);
        } else {
            /* geolocation IS NOT available */
        }

    }

    onSuccessGetGeoLocation = (position) => {
        console.log(position)
    }

    onFailedGetGeoLocation = () => {

    }

    componentDidMount() {
        this.getGeoLocation();
    }
    render() {
        const operations = <Button type='primary'>Create New Post</Button>;
        return (
            <Tabs className = 'main-tabs' tabBarExtraContent={operations}>
                <TabPane tab="Posts" key="1">Content of tab 1</TabPane>
                <TabPane tab="Map" key="2">Content of tab 2</TabPane>
            </Tabs>
        )
    }
}