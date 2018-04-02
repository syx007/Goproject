import React from 'react'
import { Tabs, Button, Spin, Icon } from 'antd';
import { GEO_OPTIONS } from "../constants"


const TabPane = Tabs.TabPane;
const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

export class Home extends React.Component {
    state  = {
        loadingGeoLocation: false,
    }
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
        this.setState({loadingGeoLocation: false});
        console.log(position);
        const { latitude, longitude } = position.coords;
        localStorage.setItem('POS_KEY', JSON.stringify({lat : latitude, lon : longitude}))
    }

    onFailedGetGeoLocation = () => {
        this.setState({loadingGeoLocation: false});
        console.log('Failed to get geolocation')
    }

    componentDidMount() {
        this.setState({loadingGeoLocation: true})
        this.getGeoLocation();
    }
    render() {
        const operations = <Button type='primary'>Create New Post</Button>;
        return (
            <Tabs className = 'main-tabs' tabBarExtraContent={operations}>
                <TabPane tab="Posts" key="1">
                    {this.state.loadingGeoLocation ? <Spin tip = "Loading location" indicator={antIcon}  /> : null}
                </TabPane>
                <TabPane tab="Map" key="2">Content of tab 2</TabPane>
            </Tabs>
        )
    }
}