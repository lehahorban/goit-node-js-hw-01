const yargs = require("yargs")
const {hideBin} = require("yargs/helpers")
// const contacts = require(__dirname)

const {
  listContacts,
  getContactById,
  addContact,
  updateContact,
  removeContact,
} = require("./contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "list":
            const allContacts = await listContacts()
            console.table(allContacts);
            break;
        case "get":
            const oneContact = await getContactById(id)
            console.log(oneContact)
            break;
        case "add":
            const newContact = await addContact({ name, email, phone })
            console.log(newContact)
            break;
         case "update":
            const upContact = await updateContact(id, {name, phone })
            console.log(upContact)
            break;
         case "remove":
            const deleteContact = await removeContact(id)
            console.log(deleteContact)
            break;
        default:
      console.warn("\x1B[31m Unknown action type!");
    }
}

// invokeAction({ action: "list"})
// invokeAction({ action: "get", id: "1"})
// invokeAction({ action: "add", name: "Oleksii", email: "leha@gmail.com", phone: "(777) 914-3792"})
// invokeAction({ action: "update", id: "MUD-_HUq9DqqpuzbTYMLS", name: "Leha", phone: "(555) 914-3792"})
// invokeAction({ action: "remove", id: "l6tY_2hPOC6OGXE5pHdx5"})

// const actionIndex = process.argv.indexOf("--action")
// if (actionIndex !== -1) {
//     const action = process.argv[actionIndex + 1]
//    invokeAction({action})
// }

const arr = hideBin(process.argv)
const { argv } = yargs(arr)
invokeAction(argv)