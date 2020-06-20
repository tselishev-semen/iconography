import React from 'react';
import {ArrowDownIcon, ArrowUpIcon} from '../icons';
import {Button} from '../components/button';
import {Link} from '../components/link';

export default {
    title: 'Iconography',
};

export const Icons = () => {
    return (
        <>
            <div>
                <h2>Icons only</h2>
                <div style={{display: 'inline-block'}}>
                    <ArrowDownIcon/>
                </div>
                <div style={{color: 'orange', display: 'inline-block'}}>
                    <ArrowDownIcon size={40}/>
                </div>
                <div style={{display: 'inline-block'}}>
                    <ArrowDownIcon size={80}/>
                </div>
                <ArrowUpIcon/>
                <div style={{display: 'inline-block'}}>
                    <ArrowUpIcon size={40}/>
                </div>
                <div style={{color: 'green', display: 'inline-block'}}>
                    <ArrowUpIcon size={80}/>
                </div>
            </div>
            <div>
                <h2>Buttons</h2>
                <div style={{marginRight: 10, display: 'inline-block'}}>
                    <Button icon={<ArrowDownIcon/>} text={'arrow down'}/>
                </div>
                <div style={{marginRight: 10, display: 'inline-block'}}>
                    <Button icon={<ArrowDownIcon size={40}/>} text={'arrow down'}/>
                </div>
                <div style={{marginRight: 10, display: 'inline-block'}}>
                    <Button icon={<ArrowUpIcon/>} text={'arrow up'}/>
                </div>
                <div style={{marginRight: 10, display: 'inline-block'}}>
                    <Button icon={<ArrowUpIcon size={40}/>} text={'arrow up'}/>
                </div>
            </div>
            <div>
                <h2>Links</h2>
                <div style={{marginRight: 10, display: 'inline-block'}}>
                    <Link icon={<ArrowDownIcon/>} text={'arrow down'} href={"#"}/>
                </div>
                <div style={{marginRight: 10, display: 'inline-block'}}>
                    <Link icon={<ArrowUpIcon/>} text={'arrow up'} href={"#"}/>
                </div>
                <div style={{marginRight: 10, display: 'inline-block'}}>
                    <Link icon={<ArrowDownIcon size={40}/>} text={'arrow down'} href={"#"}/>
                </div>
                <div style={{marginRight: 10, display: 'inline-block'}}>
                    <Link icon={<ArrowUpIcon size={40}/>} text={'arrow up'} href={"#"}/>
                </div>
            </div>
        </>
    )
};




