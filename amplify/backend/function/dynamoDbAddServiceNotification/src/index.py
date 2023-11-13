import json
import boto3

ses = boto3.client('ses')

def lambda_handler(event, context):
    for record in event['Records']:
        print(f'Stream record: {record}')
        if record['eventName'] == 'INSERT':
            new_item = record['dynamodb']['NewImage']
            send_notification_email(new_item)

def send_notification_email(new_item):
    subject = 'New service created'
    recipient_email = 'eduardo.mats@gmail.com'
    sender_email = 'rafael.tales@bike123.com.br'

    message = f'A new item has been created:\n {json.dumps(new_item, indent=2)}'

    response = ses.send_email(
        Destination={
            'ToAddresses': [recipient_email]
        },
        Message={
            'Body': {
                'Text': {
                    'Data': message,
                }
            },
            'Subject': {
                'Data': subject,
            }
        },
        Source=sender_email
    )

    print('Notification sent', response)