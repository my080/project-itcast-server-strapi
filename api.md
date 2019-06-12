
 <h1 class="curproject-name"> 黑马中学-学生端 </h1> 



# 用户

## 所有已实现接口
<a id=查询所有已实现接口> </a>

### 基本信息
#### 获取用户数量

**Path：** /consumers/count

**Method：** GET

<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
2. 400 请求参数错误<br>
3. 403 未授权<br>
4. 500 服务器异常</p>

**接口描述：**
<p>本地地址&nbsp;<a href="http://localhost:1337/provincescities/count">http://localhost:1337/provincescities/count</a><br>
返回已上线接口地址，形如：</p>
<pre><code data-language="json" class="lang-json">{
&nbsp;&nbsp;&nbsp; "name": "刘文文",
&nbsp;&nbsp;&nbsp; "type": "学生"
}
</code></pre>

<p>url 地址为资源路径<br>
键值对为查询参数</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |           

**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| type | 枚举  |  是 |  学生  |  用户类型 |
| status |  integer |  是 |  1  |  用户状态 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
	 <tr>
	 <td>
	 </td>
	 <td>
     	 </td>
     	 <td>
         	 </td>
         	 <td>
             	 </td>
             	 <td>
                 	 </td>
                 	 <td>
                     	 </td>
                     	 <td>
                         	 </td>
	  </tr>
   </tbody>
</table>
              

#### 获取用户列表

**Path：** /consumers

**Method：** GET

<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
2. 400 请求参数错误<br>
3. 403 未授权<br>
4. 500 服务器异常</p>

**接口描述：**
<p>本地地址&nbsp;<a href="http://localhost:1337/consumers">http://localhost:1337/consumers</a><br>
返回已上线接口地址，形如：</p>
<pre><code data-language="json" class="lang-json">{
&nbsp;&nbsp;&nbsp; "name": "刘文文",
&nbsp;&nbsp;&nbsp; "type": "学生"
}
</code></pre>

<p>url 地址为资源路径<br>
键值对为查询参数</p>

### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |       

**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| type | 枚举  |  是 |  学生  |  用户类型 |
| status |  integer |  是 |  1  |  用户状态 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>

              
#### 新增用户

**Path：** /consumers

**Method：** POST

<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
2. 400 请求参数错误<br>
3. 403 未授权<br>
4. 500 服务器异常</p>

**接口描述：**
<p>本地地址&nbsp;<a href="http://localhost:1337/consumers">http://localhost:1337/consumers</a><br>
返回已上线接口地址，形如：</p>
<pre><code data-language="json" class="lang-json">{
&nbsp;&nbsp;&nbsp; "name": "刘文文",
&nbsp;&nbsp;&nbsp; "type": "学生"
}

<p>url 地址为资源路径<br>
键值对为查询参数</p>


### 请求参数

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>
              

#### 修改用户

**Path：** /consumers

**Method：** PUT

**接口描述：**
<p>本地地址&nbsp;<a href="http://localhost:1337/consumers">http://localhost:1337/consumers</a><br>
返回已上线接口地址，形如：</p>
<pre><code data-language="json" class="lang-json">{
&nbsp;&nbsp;&nbsp; "name": "北京",
&nbsp;&nbsp;&nbsp; "pid": "0",
&nbsp;&nbsp;&nbsp; "type": "city"
}
</code></pre>

<p>url 地址为资源路径<br>
键值对为查询参数</p>


### 请求参数

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>

### 基本信息
#### 获取用户列表

**Path：** /consumers

**Method：** GET

**接口描述：**
<p>本地地址&nbsp;<a href="http://localhost:1337/provincescities/count">http://localhost:1337/provincescities/count</a><br>
返回已上线接口地址，形如：</p>
<pre><code data-language="json" class="lang-json">{
&nbsp;&nbsp;&nbsp; "name": "北京",
&nbsp;&nbsp;&nbsp; "pid": "0",
&nbsp;&nbsp;&nbsp; "type": "city"
}
</code></pre>

<p>url 地址为资源路径<br>
键值对为查询参数</p>


### 请求参数

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>


### 基本信息
#### 获取用户列表

**Path：** /consumers

**Method：** GET

**接口描述：**
<p>本地地址&nbsp;<a href="http://localhost:1337/provincescities/count">http://localhost:1337/provincescities/count</a><br>
返回已上线接口地址，形如：</p>
<pre><code data-language="json" class="lang-json">{
&nbsp;&nbsp;&nbsp; "name": "北京",
&nbsp;&nbsp;&nbsp; "pid": "0",
&nbsp;&nbsp;&nbsp; "type": "city"
}
</code></pre>

<p>url 地址为资源路径<br>
键值对为查询参数</p>


### 请求参数

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>


# 省市

## 刷新用户token
<a id=刷新用户token> </a>
### 基本信息

**Path：** /consumers

**Method：** PUT

**接口描述：**

<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/authorizations</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 201 OK</strong><br>
2. 400 请求参数错误<br>
3.&nbsp; 403 refresh_token<span class="colour" style="color:rgb(85, 85, 85)">未携带或已</span>过期<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> token</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户token令牌</span></td><td key=5></td></tr>
               </tbody>
              </table>


### 基本信息
#### 获取用户列表

**Path：** /consumers

**Method：** GET

**接口描述：**
<p>本地地址&nbsp;<a href="http://localhost:1337/provincescities/count">http://localhost:1337/provincescities/count</a><br>
返回已上线接口地址，形如：</p>
<pre><code data-language="json" class="lang-json">{
&nbsp;&nbsp;&nbsp; "name": "北京",
&nbsp;&nbsp;&nbsp; "pid": "0",
&nbsp;&nbsp;&nbsp; "type": "city"
}
</code></pre>

<p>url 地址为资源路径<br>
键值对为查询参数</p>


### 请求参数

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>

### 基本信息
#### 获取用户列表

**Path：** /consumers

**Method：** GET

**接口描述：**
<p>本地地址&nbsp;<a href="http://localhost:1337/provincescities/count">http://localhost:1337/provincescities/count</a><br>
返回已上线接口地址，形如：</p>
<pre><code data-language="json" class="lang-json">{
&nbsp;&nbsp;&nbsp; "name": "北京",
&nbsp;&nbsp;&nbsp; "pid": "0",
&nbsp;&nbsp;&nbsp; "type": "city"
}
</code></pre>

<p>url 地址为资源路径<br>
键值对为查询参数</p>


### 请求参数

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>

## 区域
<a id=用户认证（登录）> </a>
### 基本信息

**Path：** /login

**Method：** POST

**接口描述：**

<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/authorizations
</code></pre>

<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
2. 400 请求参数错误<br>
&nbsp; &nbsp; &nbsp; &nbsp; 包括：参数缺失、手机号格式不正确、验证码失效等<br>
3.&nbsp; 403 用户非实名认证用户，无权限登录<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<ol>
<li><code data-backticks="1">token</code>用于访问需要身份认证的普通接口，有效期2小时</li>
<li><code data-backticks="1">refresh_token</code>&nbsp;用于在token过期后，获取新的用户token，有效期14天</li>
</ol>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>手机号</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> code</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>验证码</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> token</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户token令牌</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> refresh_token</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用于刷新token的令牌</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户昵称</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户头像</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 学校
<a id=编辑用户头像> </a>

### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>
              
              
              
### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>


## 年级
<a id=编辑用户资料> </a>

### 基本信息

**Path：** /mp/v1_0/user/profile

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/profile

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 201 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用户名</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> intro</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头条号简介</span></td><td key=5></td></tr><tr key=0-2><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> email</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>邮箱</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>用户名</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> intro</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头条号简介</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> email</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>邮箱</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>

## 班级
<a id=获取人机验证码（极验 API1）> </a>
### 基本信息

**Path：** /mp/v1_0/captchas/:mobile

**Method：** GET

**接口描述：**
<h4>1 线上接口路径</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/captchas/:mobile
</code></pre>
<h4>2 返回HTTP状态码</h4>
<ol>
<li>200 OK</li>
<li>404 手机号不正确</li>
<li>507 服务器数据库异常</li>
</ol>
<h4>3 返回值</h4>
<pre><code data-language="json" class="lang-json">{
    "message": "OK",
    "data": {
        "success": 1,
        "gt": "f00de9ed073bd781c94509932a309159",
        "challenge": "e902f4f9b8b4e63dda3db1ae12ad018c",
        "new_captcha": true
    }
}
</code></pre>


### 请求参数
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| mobile |   |  手机号 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>必须</td><td key=3></td><td key=4><span></span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> success</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>GeeTest返回值</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> gt</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>GeeTest返回值</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> challenge</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>GeeTest返回值</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> new_captcha</span></td><td key=1><span>boolean</span></td><td key=2>必须</td><td key=3></td><td key=4><span>GeeTest返回值</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>


## 科目
<a id=获取用户个人资料> </a>
### 基本信息

**Path：** /mp/v1_0/user/profile

**Method：** GET

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/profile

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 201 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户名</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> intro</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>头条号简介</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户头像</span></td><td key=5></td></tr><tr key=0-1-4><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> email</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>邮箱</span></td><td key=5></td></tr><tr key=0-1-5><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>手机号</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>


## 学校类别
<a id=获取短信验证码 (极验 API2）> </a>
### 基本信息

**Path：** /mp/v1_0/sms/codes/:mobile

**Method：** GET

**接口描述：**
<h4>1 线上接口路径</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/sms/codes/:mobile
</code></pre>
<h4>2 返回HTTP状态码</h4>
<ol>
<li>200 OK</li>
<li>404 手机号不正确</li>
<li>400  本次验证极验GeeTest 已失效</li>
<li>403  极验验证失败</li>
<li>507 服务器数据库异常</li>
</ol>


### 请求参数
**路径参数**
| 参数名称 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| mobile |   |  手机号 |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| challenge | 是  |   |  GeeTest API2 参数 |
| validate | 是  |   |  GeeTest API2 参数 |
| seccode | 是  |   |  GeeTest API2 参数 |

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> mobile</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>发送短信的手机号</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>


## 通用部分
<a id=获取粉丝列表> </a>
### 基本信息

**Path：** /mp/v1_0/followers

**Method：** GET

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/followers

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  application/json | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Query**

| 参数名称  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ |
| page | 否  |   |  页数 |
| per_page | 否  |   |  每页数量 |
**Body**

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody">
               </tbody>
              </table>

### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> total_count</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>粉丝总数</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> page</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>当前页数</span></td><td key=5></td></tr><tr key=0-1-2><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> per_page</span></td><td key=1><span>integer</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>每页数量</span></td><td key=5></td></tr><tr key=0-1-3><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> results</span></td><td key=1><span>object []</span></td><td key=2>非必须</td><td key=3></td><td key=4><span></span></td><td key=5><p key=3><span style="font-weight: '700'">item 类型: </span><span>object</span></p></td></tr><tr key=0-1-3-0><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>粉丝id</span></td><td key=5></td></tr><tr key=0-1-3-1><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> name</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>粉丝用户名</span></td><td key=5></td></tr><tr key=0-1-3-2><td key=0><span style="padding-left: 40px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>头像url</span></td><td key=5></td></tr>
               </tbody>
              </table>


### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>

### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart/form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>
  
### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 401 token过期或未传<br>
4. 507 服务器数据库异常</p>
<h3>3. token说明</h3>
<p><strong>在Authorization 请求头中携带的token，格式为"Bearer "拼接上token，注意Bearer后有一个空格</strong></p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| Content-Type  |  multipart / form-data | 是  |   |   |
| Authorization  |   | 是  |  Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1NDMyODQzNjYsInVzZXJfaWQiOjF9.mLYitrKsn4E4KdQd0CNPugKrH8uQmXEQTlG_JutC8jU |  refresh_token |
**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>
       
### 基本信息

**Path：** /mp/v1_0/user/photo

**Method：** PATCH

**接口描述：**
<h4>1. 线上地址</h4>
<pre><code data-language="http" class="lang-http">http://ttapi.research.itcast.cn/mp/v1_0/user/photo

</code></pre>
<h3>2.&nbsp; 返回HTTP状态码</h3>
<p><strong>1. 200 OK</strong><br>
3. 403 未授权<br>
4. 500 服务器异常</p>


### 请求参数
**Headers**

| 参数名称  | 参数值  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |

**Body**

| 参数名称  | 参数类型  |  是否必须 | 示例  | 备注  |
| ------------ | ------------ | ------------ | ------------ | ------------ |
| photo | file  |  否 |    |  头像图片 |



### 返回数据

<table>
  <thead class="ant-table-thead">
    <tr>
      <th key=name>名称</th><th key=type>类型</th><th key=required>是否必须</th><th key=default>默认值</th><th key=desc>备注</th><th key=sub>其他信息</th>
    </tr>
  </thead><tbody className="ant-table-tbody"><tr key=0-0><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> message</span></td><td key=1><span>string</span></td><td key=2>必须</td><td key=3></td><td key=4><span>消息提示</span></td><td key=5></td></tr><tr key=0-1><td key=0><span style="padding-left: 0px"><span style="color: #8c8a8a"></span> data</span></td><td key=1><span>object</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>数据</span></td><td key=5></td></tr><tr key=0-1-0><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> id</span></td><td key=1><span>integer</span></td><td key=2>必须</td><td key=3></td><td key=4><span>用户id</span></td><td key=5></td></tr><tr key=0-1-1><td key=0><span style="padding-left: 20px"><span style="color: #8c8a8a">├─</span> photo</span></td><td key=1><span>string</span></td><td key=2>非必须</td><td key=3></td><td key=4><span>头像url地址</span></td><td key=5></td></tr>
               </tbody>
              </table>       
