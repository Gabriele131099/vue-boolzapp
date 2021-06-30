Vue.config.devtools = true;

new Vue(
    {
        el:'#app',
        data: {
            contacts: [
                {
                    name: 'Michele',
                    user: './img/avatar_1.jpg',
                    avatar: '_1',
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
                    avatar: '_2',
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

                    avatar: '_3',
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

                    avatar: '_4',
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
            indexMessage:0
            },

            created(){
                setInterval(() => {
                    this.next();
                }, interval);
             },
             methods: {
                 next:function () {
                     if (this.indexContacts === (this.contacts.length -1)) 
                         {
                             this.indexContacts = 0
                         }
                     
                     this.indexContacts++
                 },
                 prev:function () {
                     if (this.indexContacts === 0) 
                         {
                             this.indexContacts = this.contacts.length -1
                         }else{
     
                             this.indexContacts--
                         }
                 },
                 moveTo: function (index) {
                     this.indexContacts = index
                 },
                 isCourentDot: function (index) {
                     if (index === this.indexContacts) {
                         return 'current' 
                         return indexContacts
                     } else {
                         return ''
                     }
                 },
                 nextb:function () {
                    if (this.indexMessage === (this.contacts.messages.length -1)) 
                        {
                            this.indexMessage = 0
                        }
                    
                    this.indexMessage++
                },
                prevb:function () {
                    if (this.indexMessage === 0) 
                        {
                            this.indexMessage = this.contacts.messages.length -1
                        }else{
    
                            this.indexMessage--
                        }
                },
                moveTob: function (index) {
                    this.indexMessage = index
                },
             }
         }
         
      );

