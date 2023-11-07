import * as firbaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import Image from 'next/image';
import Link from 'next/link';
import { type } from 'os';
import React, { useEffect, useState } from 'react';

const AuthGithub = (props: any) => {
    useEffect(()=> {
        const ui = firbaseui.auth.AuthUI.getInstance() || 
        new firebaseui.auth.AuthUI(props.auth);
        ui.start('');


    })
}