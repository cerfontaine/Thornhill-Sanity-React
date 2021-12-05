import React from "react"
import {TextInput, SafeAreaView} from "react-native";


export default function Login(){
    return (
        <main className="bg-gray-200 min-h-screen p-12">
            <div className="loginDiv fff flex items-center flex-col p-5 font-bold">
                <h1>Token-Login</h1>
                <SafeAreaView>
                    <TextInput
                    value={number}
                    placeholder="Copy-paste your token"/>
                </SafeAreaView>
            </div>
        </main>
    );
};