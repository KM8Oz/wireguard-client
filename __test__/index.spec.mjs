import test from 'ava'
import { chdir, cwd } from 'process';
import path from "path";

import { connect } from '../index.js'
let clientkey = path.join(cwd(), "/client_keys.ron");
let serverkey = path.join(cwd(), "/wg_server.ron");
connect(clientkey, serverkey)
    // test('connect from native', (t) => {
    //     try {
    //         let clientkey = path.join(cwd(), "/client_keys.ron");
    //         let serverkey = path.join(cwd(), "/wg_server.ron");
    //         connect(clientkey, serverkey)
    //         t.pass()
    //     } catch (error) {
    //         t.fail(error)
    //     }
    // })
    // setTimeout(() => {
    //   test('close from native', (t) => {
    //     try {
    //         close()
    //         t.pass()
    //     } catch (error) {
    //         t.fail(error)
    //     }
    // })
    // }, 12000)