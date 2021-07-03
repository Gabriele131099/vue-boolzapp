Vue.config.devtools = true;

new Vue(
    {
        el:'#app',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    user: './img/avatar_1.jpg',   
                    number: '3486557084',
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
                    number: '3429857024',                   
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
                    name: 'Fausto',
                    user: './img/avatar_3.jpg',
                    number: '3487508710',
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
                    number: '3339055743',
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
                    ],
                    
                    
                },
            ],
            indexContacts :0,
            indexMessage:0,
            searchTask:'',
            newTask : '',
            searchTask: "",

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
                    let text = '';
                    if (this.newTask.includes('ciao')) {
                        text+='ciao'
                    }else if(this.newTask.includes('come stai')){
                        text= 'bene dai, tu?'
                    }else if (this.newTask === 'male' || this.newTask.includes('così così')) {
                        text='dai dai, si sistema'
                    } else if (this.newTask.includes('pizza')) {
                        text='prima pollo?'
                    }else if (this.newTask.includes('vado')) {
                        text='eja, ci sentiamo dopo'
                    } else if(this.newTask.length >= 30){
                        text= 'mi dispice, vedrai che si sistema, per ora posso girare un pollo'
                    }else if(this.newTask.includes('morto') || this.newTask.includes('morta')){
                        text= 'Dai morto un papa si fa un dromedario'
                    }else {
                        text= 'dimmi tutto'
                    }
                        
                    
                        setTimeout(() => {
                            this.contacts[this.indexContacts].messages.push({
                            date:gg+mm+aaaa+' '+Hh+Mm+Ss,
                            text: text,
                            status: 'received'
                        })
                        }, 3000);
                                    
                        this.newTask= ''
                 },  
                 addUser: function () {
                    let names = prompt('Inserisci il nome del contatto')
                    this.contacts.push({

                        name: names,
                        user: './img/avatar_.none.jpg',   
                        number: prompt('inserire il numero di telefono di ' + names),
                        visible: true,
                        messages: [
                            {
                                date: 'ora',
                                text: 'La chat con ' + names + ' è attiva',
                                status: 'new'
                            },
                            
                        ],

                    })

                        this.newTask= ''

                 },  

                
                contactMessage: function(index)
                {   
                    let status = this.contacts[this.indexContacts].messages[index].status
                        if (status === 'sent') {
                            return 'textSend'
                        }else if (status === 'new') {
                            return 'new'
                        } else {
                           return 'textRecived'
                        }
                },
                deleteTask: function(index){
                    this.contacts[this.indexContacts].messages.splice(index, 1)
                },
               }                 
            }
         
    );



