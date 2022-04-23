import test from 'ava'
import { chdir, cwd } from 'process';
import path from "path";

import { connect } from '../index.js'
test('connect from native', (t) => {
    try {
        let clientkey = path.join(cwd(), "/client_keys.ron");
        let serverkey = path.join(cwd(), "/wg_server.ron");
        connect(clientkey, serverkey)
        t.pass()
    } catch (error) {
        t.fail(error)
    }
})