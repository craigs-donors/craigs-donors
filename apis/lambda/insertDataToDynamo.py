import json
import boto3


dynamodb = boto3.resource('dynamodb',region_name='us-east-1')

def lambda_handler(event, context):
    body = json.loads(event['body'])
    tableName = body['tableName']
    payload = body['payload']
    responseCode = insertRecordsToTable(tableName, payload)
    print(responseCode)
    return {
        'statusCode': responseCode,
    }

def insertRecordsToTable(tableName, payload):
    table = dynamodb.Table(tableName)
    print(tableName)
    try:
            response = table.put_item(
                Item=payload
            )
    except Exception as e:
        print(e)
        return 500
    else:
        return response['ResponseMetadata']['HTTPStatusCode']