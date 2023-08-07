import 'react-native-gesture-handler';

import Routes from './src/routes'

export default function App() {
    return (
        <Routes />
    );
}


// import * as React from 'react';
// import { Button, Text } from 'react-native';
// import { Drawer } from 'react-native-drawer-layout';

// export default function App() {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <Drawer
//       open={open}
//       onOpen={() => setOpen(true)}
//       onClose={() => setOpen(false)}
//       renderDrawerContent={() => {
//         return <Text>Drawer content</Text>;
//       }}
//     >
//       <Button
//         onPress={() => setOpen((prevOpen) => !prevOpen)}
//         title={`${open ? 'Close' : 'Open'} drawer`}
//       />
//     </Drawer>
//   );
// }
