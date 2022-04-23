#![deny(clippy::all)]
#![allow(dead_code)]
#[macro_use]
extern crate napi_derive;
mod lib_main;
#[napi]
fn connect(client_keys:String, wg_server:String) {
  lib_main::start(&client_keys, &wg_server)
}
// #[napi]
// fn close() {
//   lib_main::close()
// }
