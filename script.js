Vue.config.devtools = true;

new Vue(
    {
        el:'#app',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    user: './img/avatar_1.jpg',   
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Ricordati di dargli da mangiare',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            text: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    user: './img/avatar_2.jpg',                    
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            text: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            text: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        },
                    ],
                },
                {
                    name: 'Samuele',
                    user: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            text: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            text: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            text: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Luisa',
                    user: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            text: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            text: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        },
                    ],
                    
                    
                },
            ],
            indexContacts :0,
            indexMessage:0,
            newTask : '',
            },

            created(){
                setInterval(() => {
                    this.next();
                }, interval);
             },
             methods: 
             {
                 moveTo: function (index) {
                     this.indexContacts = index
                 },
                 sendMessage: function () {
                    const data = new Date();
                    let gg,mm,aaaa,Hh,Mm,Ss;
                    Hh = data.getHours() + ":";
                    Mm = data.getMinutes() + ":";
                    Ss = data.getSeconds() ;
                    gg = data.getDate() + "/";
                    mm = data.getMonth() + 1 + "/";
                    aaaa = data.getFullYear() + " ";
                    this.contacts[this.indexContacts].messages.push({
                         date:gg+mm+aaaa+' '+Hh+Mm+Ss,
                         text: this.newTask,
                         status: 'sent',
                    })
                    setInterval(this.contacts[this.indexContacts].messages.push({
                        date:gg+mm+aaaa+' '+Hh+Mm+Ss,
                        text: 'Ok',
                        status: 'received',
                   }),3000)
                    
                    this.newTask= ''
                 },  
                contactMessage: function(index)
                {   
                    let status = this.contacts[this.indexContacts].messages[index].status
                        if (status === 'sent') {
                            return 'textSend'
                        }else {
                           return 'textRecived'
                        }
                },
                
            }
        } 
    );

