import json
from pprint import pprint
import boto3
from boto3.dynamodb.conditions import Key
from decimal import Decimal

dynamodb = boto3.resource('dynamodb',region_name='us-east-1')

def lambda_handler(event, context):
    tableName = event['pathParameters']['tablename']
    print(event['queryStringParameters']['pk'])
    if tableName == 'charity':
        dynamoResponse = getRecordsFromCharity(tableName, event['queryStringParameters']['pk'], '')
    elif tableName == 'cause':
        dynamoResponse = getRecordsFromCause(tableName, event['queryStringParameters']['pk'], '')
    print(dynamoResponse)
    return {
        'statusCode': 200,
        'body': json.dumps(dynamoResponse, default=default)
    }

def getRecordsFromCause(tableName, partitionKey, sortKey):
    table = dynamodb.Table(tableName)
    print("I m in Cause")
    try:
        if not sortKey:
            response = table.query(KeyConditionExpression=Key('causeName').eq(partitionKey))
        else:
            #TODO: As we decide data
            print("I m here")
            response = table.get_item(Key={'causeName': partitionKey, 'response': sortKey})
    except ClientError as e:
        print(e.response['Error']['Message'])
    else:
        return response['Items']
        
def getRecordsFromCharity(tableName, partitionKey, sortKey):
    responseCode = 200
    message = ''
    table = dynamodb.Table(tableName)
    try:
        if not sortKey:
            response = table.query(KeyConditionExpression=Key('orgID').eq(int(partitionKey)))
        else:
            #TODO: As we decide data
            print("I m here")
            response = table.get_item(Key={'orgID': partitionKey, 'charityName': sortKey})
    except ClientError as e:
        message = e.response['Error']['Message']
    else:
        return response['Items']
   

def default(obj):
    if isinstance(obj, Decimal):
        return str(obj)
    raise TypeError("Object of type '%s' is not JSON serializable" % type(obj).__name__)