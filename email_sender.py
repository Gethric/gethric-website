import smtplib
from email.message import EmailMessage

email = EmailMessage()
email['from'] = 'GEE'
email['to'] = 'gethricweb@gmail.com'
email['subject'] = 'Message from Contact Form'

email.set_content('CONTENT FROM MESSAGE')

with smtplib.SMTP(host='smtp.gmail.com', port=587) as smtp:
    smtp.ehlo()
    smtp.starttls()
    smtp.login('ctcfrm@gmail.com', 'DontMatter123')
    smtp.send_message(email)
    print('all good boss')
