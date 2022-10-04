

const contacts = require(__dirname)

console.log(contacts)

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case "getAll":
            const allContacts = await contacts.listContacts()
            console.log(allContacts);
            break;
        case "getById":
            const oneContact = await contacts.getContactById(id)
            console.log(oneContact)
            break;
        case "add":
            const newContact = await contacts.addContact({ name, email, phone })
            console.log(newContact)
            break;
         case "updateById":
            const updateContact = await contacts.updateContact(id, {name, phone })
            console.log(updateContact)
            break;
         case "removeById":
            const removeContact = await contacts.removeContact(id)
            console.log(removeContact)
            break;
        default:
      console.warn("\x1B[31m Unknown action type!");
    }
}

// invokeAction({ action: "getAll"})
// invokeAction({ action: "getById", id: "1"})
// invokeAction({ action: "add", name: "Oleksii", email: "leha@gmail.com", phone: "(777) 914-3792"})
// invokeAction({ action: "updateById", id: "MUD-_HUq9DqqpuzbTYMLS", name: "Leha", phone: "(555) 914-3792"})
invokeAction({ action: "removeById", id: "l6tY_2hPOC6OGXE5pHdx5"})