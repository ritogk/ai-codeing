# ScoreApi

All URIs are relative to *http://localhost*

|Method | HTTP request | Description|
|------------- | ------------- | -------------|
|[**scoreControllerCreateScore**](#scorecontrollercreatescore) | **POST** /score | |

# **scoreControllerCreateScore**
> scoreControllerCreateScore(body)


### Example

```typescript
import {
    ScoreApi,
    Configuration
} from './api';

const configuration = new Configuration();
const apiInstance = new ScoreApi(configuration);

let body: object; //

const { status, data } = await apiInstance.scoreControllerCreateScore(
    body
);
```

### Parameters

|Name | Type | Description  | Notes|
|------------- | ------------- | ------------- | -------------|
| **body** | **object**|  | |


### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
|**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

